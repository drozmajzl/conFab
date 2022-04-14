class Setlist < ApplicationRecord
    belongs_to :user
    has_many :setlist_tracks, dependent: :destroy
    has_many :tracks, through: :setlist_tracks
end
