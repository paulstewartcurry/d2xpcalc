require 'csv'
class Array
  def col(name)
    offset = self.class.column(name)
    self[offset]
  end

  class << self
    def columns=(colnames)
      @columns = {}
      colnames.each_with_index {|name, index| @columns[name] = index}
      nil
    end
    
    def column(name)
      @columns[name]
    end
  end
end

csv = CSV.open('data/global/excel/Levels.txt', 'r', "\t")
head = csv.shift
Array.columns = head

levels = []
csv.reject {|row| row.col('mon1').nil?}.each do |row|
  levels << {
    :name => row.col('LevelName'),
    :monsters => (1..8).map{|n| "mon#{n}"}.map {|col| row.col(col)}.compact,
    :levels => %w[MonLvl1Ex MonLvl2Ex MonLvl3Ex].map {|col| row.col(col)}.compact,
  }
end

csv.close
puts levels.map {|lev| lev.inspect}.join("\n")