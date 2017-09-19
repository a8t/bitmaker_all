FactoryGirl.define do
  factory :rider do
    nickname "andy"
    email {self.name + "@gmail.com"}
  end
end
