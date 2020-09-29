class AddColumnsBusiness3 < ActiveRecord::Migration[5.2]
  def change
    add_column :schedules, :saturday, :boolean
    add_column :schedules, :sunday, :boolean
  end
end
