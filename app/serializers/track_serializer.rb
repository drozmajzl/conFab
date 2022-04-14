class TrackSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :name, :composer, :lyrics, :record_date, :audio_track

  has_many :setlist_tracks
  has_many :comments
  has_many :replies, through: :commments, serializer: ReplySerializer

end
