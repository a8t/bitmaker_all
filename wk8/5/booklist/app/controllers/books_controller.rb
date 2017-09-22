class BooksController < ApplicationController

  def index
    @books = Book.all

    respond_to do |f|
      f.html
      f.text
      f.csv do
        render plain: Book.generate_csv(@books)
      end
      f.json do
        render json: @books
      end
    end
  end



end
