class AddColumnsBusiness2 < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :string
    add_column :businesses, :lng, :string
  end
end
