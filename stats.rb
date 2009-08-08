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

LEVELS = cache('levels') {Levels.new}
MON_STATS = cache('mon_stats') {MonStats.new}
MON_LVL = cache('mon_lvl') {MonLvl.new}

# difficulty: 0=normal, 1=nightmare, 2=hell
def area_xps(level, difficulty)
  xps = level[:monsters].map do |mon_id|
    monster = MON_STATS[mon_id]
    raise "Monster not found: #{mon_id}" if monster.nil?
    monster_level = difficulty == 0 ? monster[:levels][difficulty] : level[:levels][difficulty]
    experience_at_level_in_difficulty = MON_LVL[monster_level][:exp][difficulty]
    experience_percentage = monster[:exp_pct][difficulty].to_f/100
    experience_at_level_in_difficulty * experience_percentage
  end
  xps.avg.floor
end

LEVELS.levels.each do |level|
  level[:exp] = [0,1,2].map {|difficulty| area_xps(level, difficulty)}
end
LEVELS.levels.reject! {|level| level[:exp].sum == 0}

puts LEVELS.to_json