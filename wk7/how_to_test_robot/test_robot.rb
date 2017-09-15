require 'minitest/autorun'
require 'minitest/pride'
require './robot.rb'



class TestRobot < MiniTest::Test

  def test_that_foreign_robot_needing_repairs_sent_to_station_1
    # arrange
    foreign = Robot.new
    foreign.needs_repairs = true
    foreign.foreign_model = true
    # act
    expect = 1
    actual = foreign.station
    # assert
    assert_equal(expect,actual)
  end

  def test_that_vintage_robot_needing_repairs_sent_to_station_2
    # arrange
    vintage = Robot.new
    vintage.needs_repairs = true
    vintage.vintage_model = true
    # act
    expect = 2
    actual = vintage.station
    # assert
    assert_equal(expect,actual)
  end

  def test_that_standard_robot_needing_repairs_sent_to_station_3
    # arrange
    standard = Robot.new
    standard.needs_repairs = true
    standard.foreign_model = false
    standard.vintage_model = false
    # act
    expect = 3
    actual = standard.station
    # assert
    assert_equal(expect,actual)
  end

  def test_that_robot_in_good_condition_sent_to_station_4
    # arrange
    good_condition = Robot.new
    good_condition.needs_repairs = false
    # act
    expect = 4
    actual = good_condition.station
    # assert
    assert_equal(expect,actual)
  end

  def test_prioritize_tasks_with_empty_todo_list_returns_negative_one
    # arrange
    none = Robot.new
    # act
    expect = -1
    actual = none.prioritize_tasks
    # assert
    assert_equal(expect,actual)
  end

  def test_prioritize_tasks_with_todos_returns_max_todo_value
    # arrange
    robot = Robot.new
    robot.todos = [1,2,3,4]
    # act
    expect = 4
    actual = robot.prioritize_tasks
    # assert
    assert_equal(expect,actual)
  end

  def test_workday_on_day_off_returns_false
    # arrange
    robot = Robot.new
    robot.day_off = "monday"

    # act
    expect = false
    actual = robot.workday?("monday")
    # assert
    assert_equal(expect,actual)
  end

  def test_workday_not_day_off_returns_true
    # arrange
    robot = Robot.new
    robot.day_off = "monday"

    # act
    expect = true
    actual = robot.workday?("tuesday")
    # assert
    assert_equal(expect,actual) 
  end

end
