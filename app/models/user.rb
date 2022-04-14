class User < ApplicationRecord
    has_secure_password
    has_many :setlists
    has_many :setlist_tracks, through: :setlists
    has_many :comments
    has_many :replies
end
