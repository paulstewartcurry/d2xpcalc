require 'datasource'

class MonLvl < Datasource
  attr_accessor :levels

  def initialize
    super
    @levels = []
    rows.each do |row|
      levels << {
        :level => value(row, 'Level').to_i,
        :exp => %w[L-XP L-XP(N) L-XP(H)].map {|col| value(row, col).to_i}
      }
    end
  end

  def [](level)
    levels.find {|lvl| lvl[:level] == level}
  end

  def to_s
    levels.sort {|a,b| a[:level] <=> b[:level]}.map {|row| row.inspect}.join("\n")
  end
end
