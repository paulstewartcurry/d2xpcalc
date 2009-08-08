require 'datasource'

class Levels < Datasource
  attr_accessor :levels

  def initialize
    super
    @levels = []
    rows.each do |row|
      monsters = (1..8).map{|n| "mon#{n}"}.map {|col| value(row,col)}.compact
      next if monsters.size == 0
      levels << {
        :name => value(row,'LevelName'),
        :monsters => monsters,
        :levels => %w[MonLvl1Ex MonLvl2Ex MonLvl3Ex].map {|col| value(row,col)}.compact.map {|n| n.to_i},
      }
    end
  end
  
  def to_s
    levels.sort {|a,b| a[:levels] <=> b[:levels]}.map {|lev| lev.inspect}.join("\n")
  end
end

levels = Levels.new
puts levels