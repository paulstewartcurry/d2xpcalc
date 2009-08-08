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
    sorted_levels.map {|lev| lev.inspect}.join("\n")
  end

  def to_a
    sorted_levels.map do |lvl|
      [
        lvl[:name],
        *((0..2).map { |n|[lvl[:levels][n], lvl[:exp][n]] }.flatten)
      ]
    end
  end

  # Output 4-space indented JavaScript
  def to_json
    to_a.map {|lvl| lvl.inspect}.join(",\n")
  end

  private

  def sorted_levels
    levels.sort {|a,b| a[:levels] <=> b[:levels]}
  end
end
