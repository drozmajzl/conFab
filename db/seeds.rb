# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a1 = Album.create(name: "Please Please Me", release_date: "March 22, 1963", album_cover:"" )
a2 = Album.create(name: "With the Beatles", release_date: "November 22, 1963", album_cover:"" )
a3 = Album.create(name: "A Hard Day's Night", release_date: "June 26, 1964 (US Release) July 10, 1964 (UK Release)", album_cover:"" )
a4 = Album.create(name: "Beatles for Sale", release_date: "December 4, 1964", album_cover:"" )
a5 = Album.create(name: "Help!", release_date: "August 6, 1965 (UK Release) August 13, 1965 (US Release)", album_cover:"" )
a6 = Album.create(name: "Rubber Soul", release_date: "December 3, 1965 (UK Release) December 6, 1965 (US Release)", album_cover:"" )
a7 = Album.create(name: "Revolver", release_date: "August 5, 1966 (UK Release) August 8, 1966 (US Release)" , album_cover:"" )
a8 = Album.create(name: "Sgt. Pepper's Lonely Hearts Club Band", release_date: "May 26, 1967" , album_cover:"" )
a9 = Album.create(name: "Magical Mystery Tour", release_date: "November 27, 1967", album_cover:"" )
a10 = Album.create(name: "The Beatles (The White Album)", release_date: "November 22, 1968", album_cover:"" )
a11 = Album.create(name: "Yellow Submarine", release_date: "January 13, 1969", album_cover:"" )
a12 = Album.create(name: "Abbey Road", release_date: "September 26, 1969", album_cover:"" )
a13 = Album.create(name: "Let It Be", release_date: "May 8, 1970", album_cover:"" )


# Please Please Me

t1 = Track.create(album_id: a1.id, name: "I Saw Her Standing There", composer: "Paul?", lyrics: "Well, she was just seventeen,   /  And you know what I mean,   /  And the way she looked was way beyond compare.   /  So how could I dance with another   /  And I saw her standing there.   /  Well she looked at me, and I, I could see   /  That before too long I'd fall in love with her.   /  She wouldn't dance with another   /  Since I saw her standin' there.   /  Well, my heart went boom   /  When I crossed that room   /  And I held her hand in mine.   /  Well, we danced through the night,   /  And we held each other tight,   /  And before too long, I fell in love with her.   /  Now I'll never dance with another   /  Since I saw her standing there", audio_track:"../assets/Please Please Me/ISawHerStandingThere.mp3", record_date: "1963?")
t2 = Track.create(album_id: a1.id, name: "Misery", composer: "Cover", lyrics: "The world is treating me bad, Misery", audio_track:"", record_date: "1963?")

# Anna (got to Him)
# Chains
# Boys
# Ask Me Why
# Please Please Me
# Love Me Do
# P.S. I Love You
# Baby It's You
# Do You Want to Know a Secret
# A Taste of Honey
# There's a Place
# Twist and Shout

# With The Beatles

t3 = Track.create(album_id: a2.id, name: "It Won't Be Long", composer: "John?", lyrics: "it won't be long yeah yeah yeah yeah yeah", record_date: "1963?")
t4 = Track.create(album_id: a2.id, name: "All I've Got to Do", composer: "John", lyrics: "and all I've gotta do is thank you girl", record_date: "1963")

    # All My Loving
    # Don't Bother Me
    # Little Child
    # Till There Was You
    # Please Mr. Postman
    # Roll Over Beethoven
    # Hold Me Tight
    # You Really Got a Hold on Me
    # I Wanna Be Your Man
    # Devil in Her Heart
    # Not a Second Time
    # Money (That's What I Want)
    

# A Hard Day's Night

t5 = Track.create(album_id: a3.id, name: "A Hard Day's Night", composer: "John?", lyrics: "It's been a hard day's night and I've been working like a dog", record_date: "1964")
t6 = Track.create(album_id: a3.id, name: "I Should Have Known Better", composer: "John idk", lyrics: "I shoulda known better with a girl like you", record_date: "1964")

# If I Fell
# I'm Happy Just to Dance with You
# And I Love Her
# Tell Me Why
# Can't Buy Me Love
# Any Time at All
# I'll Cry Instead xxxx
# Things We Said Today
# When I Get Home
# You Can't Do That
# I'll Be Back

# Beatles for Sale (a4)

# No Reply
# I'm a Loser
# Baby's in Black
# Rock and Roll Music
# I'll Follow the Sun
# Mr. Moonlight
# Kansas City/Hey-Hey-Hey-Hey
# Eight Days a Week
# Words of Love
# Honey Don't
# Every Little Thing
# I Don't Want to Spoil the Party
# What You're Doing
# Everybody's Trying to Be My Baby

# Help! (a5)

# Help
# The Night Before
# You've Got to Hide Your Love Away
# I Need You
# Another Girl
# You're Going to Lose That Girl
# Ticket to Ride
# Act Naturally
# It's Only Love
# You Like Me Too Much
# Tell Me What You See
# I've Just Seen a Face
# Yesterday
# Dizzy Miss Lizzy

# Rubber Soul (a6)

# Drive My Car
# Norweigian Wood
# You Won't See Me
# Nowhere Man
# Think for Yourself
# The Word
# Michelle
# What Goes On
# Girl
# I'm Looking Through You
# In My Life
# Wait
# If I Needed Someone
# Run for Your Life

# Revolver (a7)

# Taxman
# Eleanor Rigby
# I'm Only Sleeping
# Love You To
# Here, There and Everywhere
# Yellow Submarine
# She Said She Said
# Good Day Sunshine
# And Your Bird Can Sing
# For No One
# Doctor Robert
# I Want to Tell You
# Got to Get You into My Life
# Tomorrow Never Knows

# Sgt. Peppers (a8)

# Sgt. Pepper's Lonely Hearts Club Band
# With a Little Help from My Friends
# Lucy in the Sky with Diamonds
# Getting Better
# Fixing a Hole
# She's Leaving Home
# Being for the Benefit of Mr. Kite!
# Within You Without You
# When I'm Sixty-Four
# Lovely Rita
# Good Morning Good Morning
# Sgt. Pepper's Lonely Hearts Club Band (Reprise)
# A Day in the Life

# Magical Myster Tour (a9)

# Magical Mystery Tour
# The Fool on the Hill
# Flying
# Blue Jay Way
# Your Mother Should Know
# I Am the Walrus
# Hello, Goodbye
# Strawberry Fields Forever
# Penny Lane
# Baby, You're a Rich Man
# All You Need Is Love

# The Beatles (white Album) (a10)

# Back in the U.S.S.R.
# Dear Prudence
# Glass Onion
# Ob-La-Di, Ob-La-Da
# Wild Honey Pie
# The Continuing Story of Bungalow Bill
# While My Guitar Gently Weeps
# Happiness Is a Warm Gun
# Martha My Dear
# I'm So Tired
# Blackbird
# Piggies
# Rocky Raccoon
# Don't Pass Me By
# Why Don't We Do It in the Road?
# I Will
# Julia
# Birthday
# Yer Blues
# Mother Nature's Son
# Everybody's Got Something to Hide Except Me and My Monkey
# Sexy Sadie
# Helter Skelter
# Long, Long, Long
# Revolution 1
# Honey Pie
# Savoy Truffle
# Cry Baby Cry
# Revolution 9
# Good Night

# Yellow Submarine (a11)

# Yellow Submarine
# Only a Northern Song
# All Together Now
# Hey Bulldog
# It's All Too Much
# All You Need is Love
# PepperLand
# Sea of Time
# Sea of Holes
# Sea of Monsters
# March of the Meanies
# Pepperland Laid Waste
# Yellow Submarine in Pepperland

# Abbey Road (a12)

# Come Together
# Something
# Maxwell's Silver Hammer
# Oh! Darling
# Octopus's Garden
# I Want You (She's So Heavy)
# Here Comes the Sun
# Because
# You Never Give Me Your Money
# Sun King
# Mean Mr. Mustard
# Polythene Pam
# She Came in Through the Bathroom Window
# Golden Slumbers
# Carry That Weight
# The End
# Her Majesty

# Let It Be (a13)

# Two of Us
# Dig a Pony
# Across the Universe
# I Me Mine
# Dig It
# Let It Be
# Maggie Mae
# I've Got a Feeling
# One After 909
# The Long and Winding Road
# For You Blue
# Get Back