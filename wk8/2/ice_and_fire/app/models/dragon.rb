class Dragon < ApplicationRecord
  validates :name, presence: true

  belongs_to :rider

  def dracarys
    "#{name} emits a jet of flame!"
  end

  def can_eat_40_sheep?
    if appetite == 'Insatiable'
      return true
    else
      return false
    end
  end

  # Tells you which period a Dragon was alive during
  def period_alive
    if age.between?(0, 3)
      'A Song of Ice and Fire'
    elsif age.between?(4, 18)
      'The Fall of the Dragons'
    elsif age.between?(19, 414)
      'Targaryen Dynasty'
    else
      'Age of Valyria'
    end
  end

  # Attempt to mount some_rider on this Dragon!
  # Caution, they only allow the rider they belongs_to
  def mount(some_rider)
    if some_rider == rider
      return "#{some_rider.name} soars into the air on #{name}'s back!"
    else
      return "#{name} bucks off #{some_rider.name}!"
    end
  end

end
