class CreateSetlistTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :setlist_tracks do |t|
      t.integer :setlist_id
      t.integer :track_id

      t.timestamps
    end
  end
end
