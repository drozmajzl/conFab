class SetlistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name

  has_many :setlist_tracks
  has_many :tracks, through: :setlist_tracks

end
