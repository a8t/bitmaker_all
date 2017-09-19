Where are your Dragons? Right here, friends!

Today you are going to be working in a land of Ice and Fire with Dragons, and the Riders who love them. You will practice the same testing techniques from days past. However, today you will use Factories to generate the objects your test cases run against.

##  This assignment assumes some experience with the following:
* Ruby fundamentals
* Unit testing, and Model testing in a Rails app
* The directory structure of a Rails app

## Learning Goals:
* Using Factories in Model tests to build objects
* Making new Factories
* Using dynamic attributes in Factories
* Keeping Factories sparse and minimal

## Getting started

Fork the [assignment repository](https://github.com/bitmakerlabs/ice_and_fire/tree/master) on Github to your account and then clone it to your local machine.

`cd` into the directory, `bundle install`, and then `rails db:setup`

You'll be working with the app from today's lecture, but with several unfinished requirements. It's a skeleton of a rails app, with no controllers, routes, or views (you won't need them). This assignment focusses  solely on the `Dragon` and `Rider` models and the tests that support them.

You will be repeatedly running the tests with `rails test`, so try it now!
You should see:
```
9 runs, 3 assertions, 0 failures, 0 errors, 6 skips
```
As you use the dragon and rider factories in your test cases, the 6 skipped test cases will be run, and should pass.

### Part 1: Introduction

Take a moment to skim the content of each of the following files:
- **`db/schema.rb`**
- **`app/models/dragon.rb`**
- **`app/models/rider.rb`**
- **`test/factories/dragons.rb`**
- **`test/factories/riders.rb`**
- **`test/models/dragon_test.rb`**
- **`test/models/rider_test.rb`**

As you can see from `db/schema.rb` Dragons have name, age, and appetite attributes and each Dragon belongs_to a Rider. Looking at `app/models/dragon.rb` shows us the `dracarys` and `can_eat_40_sheep?` methods, which should be familiar from lecture. However, there are now two new methods with additional behaviour. `period_alive` tells us which period of time the Dragon was born in, based on their age. The `mount(some_rider)` method takes a rider as a parameter, and tries to place them on the Dragon's back. Both of these methods simply return strings of text.

In `schema.rb` it's clear that Riders have a name, a sword, a nickname, and an email address (to keep in touch, obvi). Currently, the Rider model in `app/models/rider.rb` only has one method, `swing` which allows a Rider to swing their sword in a heroic display of might! Again, it just returns a string.

### Part 2: Using the Dragon Factory

We'll be working in `test/models/dragon_test.rb` for this part. The first three test cases are passing successfully, and offer good examples of using the FactoryGirl's `build( ... )` method.

#### Testing the .period_alive Method
The fourth test case is currently skipped, but will be run when we supply a value for the `young_dragon` variable.
```ruby
  young_dragon = nil
```

How about we use the `build` method to get a new Dragon?
```ruby
  young_dragon = build(:dragon)
```

We run our tests with `rails test`, and boom!

```sh
DragonTest#test_that_young_dragons_from_asoiaf:
NoMethodError: undefined method `between?` for nil:NilClass
    app/models/dragon.rb:20:in `period_alive`
    test/models/dragon_test.rb:27:in `test_that_young_dragons_from_asoiaf`
```

Let's put a pry binding in there...
```ruby
  young_dragon = build(:dragon)
  binding.pry
```


Then we can run our tests again with `rails test`, to see whats wrong with young_dragon...

```ruby
pry(#<DragonTest>)> young_dragon
=> #<Dragon:0x007fa31dbcbf20
 id: nil,
 name: "Trogdor",
 age: nil,
 appetite: nil,
 rider_id: nil,
 created_at: nil,
 updated_at: nil>
```

Looks like our young dragon has a name, but is missing an age, which is leading to our nil:NilClass error. How should we supply this value? Since there's no validation on the Dragon model that says they *must* have an age, we have two options:

#### Option: Add it to the Factory
If we look at `test/factories/dragons.rb` again, currently every new Dragon that gets this factory will be named Trogdor. Why not put age in there too? For this test case, looks like we need a dragon with an age between 0 and 3.

``` ruby
  factory :dragon do
    name "Trogdor"
    age 2
  end
```

However, if you look ahead to the next two test cases, it seems like they need dragons with very different ages to pass. Also, this means that *every* dragon coming out of this factory will *always* have an age, is that necessary? Seems like extra clutter to have that value present in *every* test dragon for all time...

#### Option: Add it to the Test Case
Instead, if we leave our factory 'sparse' and stick to only the bare essentials, it gives us more flexibility to respond to change down the line. If there are changes needed to the way dragon ages are handled, we will only have to modify *relevant* test cases.
``` ruby
  factory :dragon do
    name "Trogdor"
  end
```

So back in our `test/models/dragon_test.rb` file, let's specify the age attribute and re-run `rails test`.
```ruby
  young_dragon = build(:dragon, age: 2)
```

There! now the relevant test data (the age) is right alongside the relevant test case! Don't forget to remove your `binding.pry`, and let's re-run `rails test`.

```sh
9 runs, 4 assertions, 0 failures, 0 errors, 5 skips
```

Ahh, nice! Go ahead and fill in the values for middle_dragon, and ancient_dragon to make those cases pass too. You'll need to pass in a valid age for both, which you can guess by looking at the `period_alive` method in `dragon.rb`

Once you're done that, you should have:
```sh
9 runs, 6 assertions, 0 failures, 0 errors, 3 skips
```
#### Testing the .mount(some_rider) method
Let's move on to using multiple factories in one test case. Try filling in the values for stranger and dragon in `test_that_stranger_cannot_mount`. You'll need to build a rider and a dragon with the right names.

And finally, in `test_that_the_right_rider_can_mount`, you'll not only need the right names for owner and dragon, but you'll need a dragon who actually belongs_to the right rider. This means you'll actually have to specify the 'rider' property when building your dragon.

When you're finished this section, you should have:
```sh
9 runs, 8 assertions, 0 failures, 0 errors, 1 skips
```

### Part 3: Using the Rider Factory
Let's move onto `test/models/rider_test.rb`. There's only 1 test case that we need to make pass. Looks like it needs values for the `aegon` and `daenerys` variables. But this time, we are going to use FactoryGirl's `create` method instead of `build`.

Once you've got values you're happy with, put a `binding.pry` statement below and run`rails test` to inspect aegon and daenerys:

```ruby
aegon = create(...)
daenerys = create(...)

binding.pry
```

Check it out! These are real, persisted objects. They have an id, a created_at, and an updated_at value. I'm a real boy!
```ruby
[1] pry(#<RiderTest>)> aegon
=> #<Rider:0x007fa32247e6c8
 id: 1,
 name: "Aegon",
 sword: "Blackfyre",
 nickname: nil,
 email: nil,
 created_at: Wed, 14 Jun 2017 19:58:48 UTC +00:00,
 updated_at: Wed, 14 Jun 2017 19:58:48 UTC +00:00>
```

In some tests it will be important to have objects that have been saved to the database, which is where FactoryGirl's `create` method comes in handy. As a side effect, you're now done and all your tests are passing!

```sh
9 runs, 10 assertions, 0 failures, 0 errors, 0 skips
```
### Part 4: Modifying the Rider Factory
But wait... the winds of change are brewing. Winter is coming as some might say.

Riders have been sneaking into our database without a value in their `nickname` field! Our Team Lead says that this is unacceptable and to enforce it in the future, they've asked us to put a validation on the Rider model. Go ahead and uncomment the first validation in `app/models/rider.rb`.

```ruby
  validates :nickname, presence: true
  # validates :email, presence: true, uniqueness: true
```

Just to be safe, let's re-run our tests with `rails test`... Oh noes, A wild error appears!

```ruby
Error:
RiderTest#test_that_riders_swing:
ActiveRecord::RecordInvalid: Validation failed: Nickname can't be blank
    test/models/rider_test.rb:8:in `test_that_riders_swing'
```

Looks like the nickname can't ever be blank anymore! Because of `create` on line 8 and 9 of `rider_test.rb`, the aegon and daenerys objects will now fail validation, and our test case fails. Again, we have two options to fix this.

#### Add it to the Test Case
This is what we did before, just add it as a parameter to the create method.
```ruby
aegon = create(:rider, name: 'Aegon', sword: 'Blackfyre', nickname: 'The Conqueror')
```
Seems weird though right? nickname isn't even applicable to this test case, why would we have to specify it? Also, what a pain to supply a nickname in every single test case, especially when they aren't being used.

#### Add it to the Factory
In this case, because `nickname` is a required (validated) field, it makes sense to add a default to the Factory in `test/factories/riders.rb`
```ruby
FactoryGirl.define do
  factory :rider do
    # your code here
  end
end
```
Go ahead and fill in a default value for nickname, 'The Conqueror' should do nicely for your typical Dragon Rider.

### Part 5: Dynamic Attributes in the Rider Factory
A new validation requirement has cropped up. Now Riders definitely need an email, *and* they all need to be different from one another! Go ahead and uncomment the second validation in `app/models/rider.rb`.

```ruby
  validates :nickname, presence: true
  validates :email, presence: true, uniqueness: true
```

How can we get around this one? We can try another fixed string in our factory:
```ruby
FactoryGirl.define do
  factory :rider do
    nickname "The Conqueror"
    email "rider@westeros.com"
  end
end
```

but our tests will still fail because of the uniqueness constraint:
```sh
ActiveRecord::RecordInvalid: Validation failed: Email has already been taken
```

Sounds like it's time for a dynamic attribute in our factory! We do that by opening a block that generates a string that changes depending on who's calling it, or when it's called. It would be good if a riders email was generated based on their name, right? Like 'aegon@westeros.com' and 'daenerys@westeros.com'? See if you can add the code to `test/factories/riders.rb` that would make that happen.
```ruby
FactoryGirl.define do
  factory :rider do
    nickname "The Conqueror"
    email { #your code here to generate a dynamic string }
  end
end
```

You should be back to full test passing!
```sh
9 runs, 10 assertions, 0 failures, 0 errors, 0 skips
```

That's it! Now you have learned how to use factories in a test case, and when to add defaults in the factories themselves! Go forth Dragon Rider, and Conquer the (rails) world!
