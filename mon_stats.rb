require 'datasource'

class MonStats < Datasource
  attr_accessor :monsters

  def initialize(file)
    super
    @monsters = []
    rows.each do |row|
      levels = %w[Level Level(N) Level(H)].map {|col| value(row,col)}.compact.map {|n| n.to_i}
      next if levels.empty?
      monsters << {
        :id => value(row, 'Id'),
        :name => value(row,'NameStr'),
        :levels => levels,
      }
    end
  end
  
  def to_s
    monsters.sort {|a,b| a[:id] <=> b[:id]}.map {|row| row.inspect}.join("\n")
  end
end

monstats = MonStats.new('data/global/excel/MonStats.txt')
puts monstats