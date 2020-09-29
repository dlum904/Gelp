class EditSchedulesDays < ActiveRecord::Migration[5.2]
  def change
    remove_column :schedules, :monday
    remove_column :schedules, :tuesday
    remove_column :schedules, :wednesday
    remove_column :schedules, :thursday
    remove_column :schedules, :friday
    remove_column :schedules, :saturday
    remove_column :schedules, :sunday
    add_column :schedules, :day, :string
    
  end
end
