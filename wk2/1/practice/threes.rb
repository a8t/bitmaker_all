
number = 100
while number != 1
  if number % 3 == 0
    puts "(#{number} + 0 ) / 3 = #{number / 3}"
    number = number / 3
  elsif (number + 1) % 3 == 0
    puts "(#{number} + 1 ) / 3 = #{(number + 1) / 3}"
    number = (number + 1) / 3
  else
    puts "(#{number} - 1 ) / 3 = #{(number - 1) / 3}"
    number = (number. - 1)/3
  end
end
puts 1
