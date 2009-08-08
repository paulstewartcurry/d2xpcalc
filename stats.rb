require 'levels'
require 'mon_stats'
require 'mon_lvl'

class Array
  def sum
    inject(0) {|a,e| a+e}
  end

  def avg
    sum.to_f / size
  end
end

# Store/load datasources from a marshaled cache for a huge speedup on subsequent runs.
def cache(key, &block)
  cache_file = "cache.#{key}.marshal"
  if File.exist?(cache_file)
    return Marshal.load(File.read(cache_file))
  else
    obj = block.call
    File.open(cache_file,'w') {|f| f.puts Marshal.dump(obj)}
    return obj
  end
end

levels = cache('levels') {Levels.new}
mon_stats = cache('mon_stats') {MonStats.new}
mon_lvl = cache('mon_lvl') {MonLvl.new}

levels.levels.each do |level|
  normal_monster_xps = level[:monsters].map do |mon_id|
    monster = mon_stats[mon_id]
    raise "Monster not found: #{mon_id}" if monster.nil?
    monster_level = monster[:levels][0]
    experience_at_level_in_difficulty = mon_lvl[monster_level][:exp].first
    experience_percentage = monster[:exp_pct].first.to_f/100
    experience_at_level_in_difficulty * experience_percentage
  end

  nightmare_area_level = level[:levels][1]
  nightmare_monster_xps = level[:monsters].map do |mon_id|
    monster = mon_stats[mon_id]
    raise "Monster not found: #{mon_id}" if monster.nil?
    monster_level = nightmare_area_level
    experience_at_level_in_difficulty = mon_lvl[monster_level][:exp].first
    experience_percentage = monster[:exp_pct].first.to_f/100
    experience_at_level_in_difficulty * experience_percentage
  end

  hell_area_level = level[:levels][2]
  hell_monster_xps = level[:monsters].map do |mon_id|
    monster = mon_stats[mon_id]
    raise "Monster not found: #{mon_id}" if monster.nil?
    monster_level = hell_area_level
    experience_at_level_in_difficulty = mon_lvl[monster_level][:exp].first
    experience_percentage = monster[:exp_pct].first.to_f/100
    experience_at_level_in_difficulty * experience_percentage
  end

  level[:exp] = [
    normal_monster_xps.avg.floor,
    nightmare_monster_xps.avg.floor,
    hell_monster_xps.avg.floor
  ]
end

puts levels