class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zip_code, :integer
    add_column :users, :birthday, :date
  end
end
