class CreateDragons < ActiveRecord::Migration[5.1]
  def change
    create_table :dragons do |t|
      t.string :name
      t.integer :age
      t.string :appetite
      t.references :rider

      t.timestamps
    end
  end
end
