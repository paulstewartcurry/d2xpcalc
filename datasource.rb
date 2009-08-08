require 'csv'

class Datasource
  attr_accessor :data
  attr_reader :rows

  def initialize(file)
    csv = CSV.open(file, 'r', "\t")
    head = csv.shift
    @columns = {}
    head.each_with_index {|name, index| @columns[name] = index}
    @rows = csv.to_a
    csv.close
  end
  
  private
  
  def value(row, column_name)
    offset = @columns[column_name]
    row[offset]
  end
end
