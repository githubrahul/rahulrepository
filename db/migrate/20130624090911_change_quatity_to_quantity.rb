class ChangeQuatityToQuantity < ActiveRecord::Migration
  def change
  	rename_column :products, :quatity, :quantity
  end
end
