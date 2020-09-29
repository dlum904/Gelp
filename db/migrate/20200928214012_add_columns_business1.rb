class AddColumnsBusiness1 < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :category
    add_column :businesses, :category_1, :string
    add_column :businesses, :category_2, :string
    add_column :businesses, :category_3, :string
  end
end
