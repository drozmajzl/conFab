class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :track
    has_many :replies
end
