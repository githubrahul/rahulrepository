class RemoveQualityFromProduct < ActiveRecord::Migration
  def change
  	remove_column:Products,:quality
  end
end
