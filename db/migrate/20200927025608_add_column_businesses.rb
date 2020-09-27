class AddColumnBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :business_zip_code, :integer
    add_column :businesses, :category, :string
    add_column :businesses, :phone, :integer
    add_column :businesses, :website, :string
    add_column :businesses, :street_address, :string
    add_column :businesses, :business_email, :string
    add_column :businesses, :owner_id, :integer
    add_index :businesses, :owner_id
  end
end
