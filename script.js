// Beautiful Bible verses collection
const bibleVerses = [
    {
        text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11"
    },
    {
        text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters.",
        reference: "Psalm 23:1-2"
    },
    {
        text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        reference: "1 Corinthians 13:4"
    },
    {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        text: "Be still, and know that I am God.",
        reference: "Psalm 46:10"
    },
    {
        text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.",
        reference: "Numbers 6:24-25"
    },
    {
        text: "Trust in the Lord with all your heart and lean not on your own understanding.",
        reference: "Proverbs 3:5"
    },
    {
        text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
        reference: "1 Corinthians 13:13"
    },
    {
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        reference: "Psalm 34:18"
    },
    {
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6"
    },
    {
        text: "He has made everything beautiful in its time.",
        reference: "Ecclesiastes 3:11"
    },
    {
        text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.",
        reference: "Lamentations 3:22-23"
    },
    {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7"
    },
    {
        text: "You are altogether beautiful, my darling; there is no flaw in you.",
        reference: "Song of Solomon 4:7"
    },
    {
        text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
        reference: "Zephaniah 3:17"
    },
    {
        text: "Blessed are the pure in heart, for they will see God.",
        reference: "Matthew 5:8"
    },
    {
        text: "Let all that you do be done in love.",
        reference: "1 Corinthians 16:14"
    },
    {
        text: "The Lord is my light and my salvation—whom shall I fear?",
        reference: "Psalm 27:1"
    },
    {
        text: "For where your treasure is, there your heart will be also.",
        reference: "Matthew 6:21"
    },
    {
        text: "She is clothed with strength and dignity; she can laugh at the days to come.",
        reference: "Proverbs 31:25"
    }
];

// Get random Bible verse
function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    return bibleVerses[randomIndex];
}

// Display verse with animation
function displayVerse() {
    const verseContainer = document.getElementById('bibleVerse');
    const verse = getRandomVerse();

    // Fade out current verse
    verseContainer.classList.remove('show');

    // Wait for fade out, then update content and fade in
    setTimeout(() => {
        verseContainer.innerHTML = `
            "${verse.text}"
            <br><br>
            <span style="font-size: 1.1rem; letter-spacing: 0.1em;">— ${verse.reference}</span>
        `;
        verseContainer.classList.add('show');
    }, 300);
}

// Initialize button event listener
document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('giftButton');
    giftButton.addEventListener('click', displayVerse);
});
