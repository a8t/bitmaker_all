class Pizza
  def initialize
    @baked = false
  end

  def bake
    @baked = true
  end
end

pizza = Pizza.new
puts pizza.inspect
pizza.bake
puts pizza.inspect
