require "erb"

price = 8.75

line_1 = "Bill:   That will cost you $<% price %> plus taxes, ma'am."
line_2 = "Pritma: How much is it with taxes?"
line_3 = "Bill:  $<%= (price * 1.13).round(2) %>"

line_1_erb = ERB.new(line_1)
line_2_erb = ERB.new(line_2)
line_3_erb = ERB.new(line_3)

puts
puts line_1_erb.result
puts
puts line_2_erb.result
puts
puts line_3_erb.result
puts
