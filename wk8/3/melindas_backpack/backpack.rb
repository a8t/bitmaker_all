class Backpack
  def initialize(attributes)
    @attributes = attributes
    @items = ['pants', 'shirt']
    prepare
  end

  def items
    @items
  end

  def prepare
    weather = @attributes[:weather]
    day_of_week = @attributes[:day_of_week]

    if weather == 'rainy'
      @items << 'umbrella'
    elsif weather == 'cold'
      @items << 'jacket'
    end

    case day_of_week
    when 'monday', 'thursday'
      @items << 'gym shoes'
      @items << 'packed lunch'
    when 'saturday', 'sunday'
      @items << 'snacks'
    else
      @items << 'packed lunch'
    end

  end

  def my_func
    sentence = "Melinda, here's your packing list!\nDay: #{@attributes[:day_of_week]}, Weather: #{@attributes[:weather]}\n"

    @items.each do |item|
      sentence << "\n- #{item}"
    end
    sentence
  end

end
