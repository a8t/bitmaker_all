require "minitest/autorun"
require_relative "rocket"

class RocketTest < Minitest::Test
  # Write your tests here!
  def setup
    @rocket = Rocket.new
  end

  def test_lift_off
    @rocket.lift_off

    assert @rocket.flying?
  end

  def test_flying_fails_if_grounded
    refute @rocket.flying?
  end


  def test_cant_liftoff_if_already_flying
    @rocket.lift_off

    refute @rocket.lift_off
  end

  def test_land
    @rocket.lift_off

    assert @rocket.land
  end

  def test_cant_land_if_not_flying
    refute @rocket.land
  end


end
