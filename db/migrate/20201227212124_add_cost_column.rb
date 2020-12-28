class AddCostColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :cost, :string
  end
end
