class Track < ApplicationRecord
    belongs_to :album
    has_many :comments
    has_many :setlist_tracks
    has_many :replies, through: :comments

end
