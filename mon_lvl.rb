require 'datasource'

class MonLvl < Datasource
  attr_accessor :levels

  def initialize(file)
    super
    @levels = []
    rows.each do |row|
      levels << {
        :level => value(row, 'Level').to_i,
        :exp => %w[L-XP L-XP(N) L-XP(H)].map {|col| value(row, col).to_i}
      }
    end
  end
  
  def to_s
    levels.sort {|a,b| a[:level] <=> b[:level]}.map {|row| row.inspect}.join("\n")
  end
end

monlvl = MonLvl.new('data/global/excel/MonLvl.txt')
puts monlvl