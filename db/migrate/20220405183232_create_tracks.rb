class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.integer :album_id
      t.string :name
      t.string :composer
      t.string :lyrics
      t.string :audio_track
      t.string :record_date

      t.timestamps
    end
  end
end
