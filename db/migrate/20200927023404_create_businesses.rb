class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null: false
      t.string :city, null: false
      t.string :state, null: false
      
      t.timestamps
    end
  end
end
