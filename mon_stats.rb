require 'datasource'

# Monstats has a couple of interesting columns:
# * Id corresponds with the 'monN' columns from Levels and will be used as a lookup key.
# * Exp is the percentage points of experience the monster gains relative to a monster of its level, defined in MonLvl.
# * Level is the monster's level, though it is ignored in Nightmare and Hell in favor of the area level.
class MonStats < Datasource
  attr_accessor :monsters

  def initialize(file)
    super
    @monsters = []
    rows.each do |row|
      levels = %w[Level Level(N) Level(H)].map {|col| value(row,col)}.compact.map {|n| n.to_i}
      exp = %w[Exp Exp(N) Exp(H)].map {|col| value(row,col)}.compact.map {|n| n.to_i}
      name = value(row,'NameStr')
      next if levels.empty? or exp.empty? or name.nil?
      monsters << {
        :id => value(row, 'Id'),
        :name => name,
        :levels => levels,
        :exp_pct => exp,
      }
    end
  end
  
  def to_s
    monsters.sort {|a,b| a[:levels] <=> b[:levels]}.map {|row| row.inspect}.join("\n")
  end
end

monstats = MonStats.new('data/global/excel/MonStats.txt')
puts monstats