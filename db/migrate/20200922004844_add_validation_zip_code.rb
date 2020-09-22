class AddValidationZipCode < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :zip_code
  end
end
