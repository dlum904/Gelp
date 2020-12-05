class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :business_name, :string
  end
end
