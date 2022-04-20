class User < ApplicationRecord
    has_secure_password
    has_many :setlists
    has_many :setlist_tracks, through: :setlists
    has_many :comments
    has_many :replies

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :age, presence: true, numericality: true
end
