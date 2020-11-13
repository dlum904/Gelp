class Addlatandlng < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :integer
    add_column :businesses, :lng, :integer
  end
end
