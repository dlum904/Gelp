class Changelocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :lat
    remove_column :businesses, :lng
  end
end
