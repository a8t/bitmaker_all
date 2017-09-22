class BooksController < ApplicationController

  def index
    @books = Book.all

    respond_to do |f|
      f.html
    end
  end



end
