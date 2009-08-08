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
  monster_xps = level[:monsters].map do |mon_id|
    monster = mon_stats[mon_id]
    raise "Monster not found: #{mon_id}" if monster.nil?
    monster_level_normal = monster[:levels][0]
    monster_experience_monster_level_normal = mon_lvl[monster_level_normal][:exp].first
    monster_experience_percentage_normal = monster[:exp_pct].first.to_f/100
    norm_real_xp = monster_experience_monster_level_normal * monster_experience_percentage_normal
  end
  level[:exp] = [monster_xps.avg.floor]
end

# normal_real_xp = normal_mon_lvl_xp * mon_xp_pct_norm
# nightmare_real_xp = nm_area_lvl_xp * mon_xp_pct_nm
# hell_real_xp = hell_area_lvl_xp * mon_xp_pct_hell

puts levels