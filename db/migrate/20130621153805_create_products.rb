class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.integer :price
      t.integer :quatity

      t.timestamps
    end
  end
end
