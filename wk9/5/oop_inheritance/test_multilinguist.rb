require 'minitest/autorun'
require 'minitest/pride'
require './multilinguist.rb'

class TestMultilinguist < MiniTest::Test
    def test_idk
        
        assert_equal language_in("italy"), "it"
    end

end