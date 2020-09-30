class AddRemoveColumnsPhotos < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :imageable_type
    remove_column :photos, :imageable_id
  end
end
