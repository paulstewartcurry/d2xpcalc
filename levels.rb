require 'csv'

class Levels
  attr_accessor :levels

  def initialize(file)
    csv = CSV.open(file, 'r', "\t")
    head = csv.shift
    @columns = {}
    head.each_with_index {|name, index| @columns[name] = index}

    @levels = []
    csv.each do |row|
      monsters = (1..8).map{|n| "mon#{n}"}.map {|col| value(row,col)}.compact
      next if monsters.size == 0
      levels << {
        :name => value(row,'LevelName'),
        :monsters => monsters,
        :levels => %w[MonLvl1Ex MonLvl2Ex MonLvl3Ex].map {|col| value(row,col)}.compact,
      }
    end

    csv.close
  end
  
  def to_s
    levels.map {|lev| lev.inspect}.join("\n")
  end
  
  private
  
  def value(row, column_name)
    offset = @columns[column_name]
    row[offset]
  end
end

levels = Levels.new('data/global/excel/Levels.txt')
puts levels