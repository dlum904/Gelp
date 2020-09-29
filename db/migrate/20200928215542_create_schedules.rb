class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.string :open
      t.string :close
      t.integer :business_id
      t.timestamps
    end
    add_index :schedules, :business_id
  end
end
