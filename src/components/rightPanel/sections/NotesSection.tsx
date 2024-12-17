import React, { useState } from 'react';
import { PlusCircle, Pencil, Trash2, Save, X } from 'lucide-react';
import { PanelAccordion } from '../common/PanelAccordion';

interface Note {
  id?: string;
  title: string;
  content: string;
  category: string;
  timestamp: Date;
}

const noteCategories = [
  "Patient Cases",
  "Treatment Plans",
  "Clinical Guidelines",
  "Personal Reminders"
];

export function NotesSection() {
  const [notes, setNotes] = useState<Record<string, Note[]>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const handleSaveNote = () => {
    if (!currentNote?.title || !currentNote?.content || !currentNote?.category) return;

    setNotes(prev => ({
      ...prev,
      [currentNote.category]: [
        ...(prev[currentNote.category] || []),
        { ...currentNote, timestamp: new Date() }
      ]
    }));
    setIsEditing(false);
    setCurrentNote(null);
  };

  return (
    <div className="space-y-2">
      {!isEditing ? (
        <>
          <button
            onClick={() => {
              setIsEditing(true);
              setCurrentNote({ title: '', content: '', category: noteCategories[0], timestamp: new Date() });
            }}
            className="w-full p-2 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 rounded-lg btn-animate border-3d"
          >
            <PlusCircle className="h-4 w-4" />
            <span className="panel-text">New Note</span>
          </button>

          {noteCategories.map((category) => (
            <PanelAccordion
              key={category}
              title={category}
              defaultOpen={notes[category]?.length > 0}
            >
              <div className="space-y-2">
                {notes[category]?.map((note, index) => (
                  <div key={index} className="p-2 bg-white rounded-lg border-3d">
                    <div className="flex justify-between items-start">
                      <h3 className="panel-text font-medium">{note.title}</h3>
                      <div className="flex gap-2">
                        <button className="text-gray-500 hover:text-blue-600">
                          <Pencil className="h-3 w-3" />
                        </button>
                        <button className="text-gray-500 hover:text-red-600">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <p className="panel-text-sm text-gray-600 mt-1">
                      {note.content.substring(0, 100)}
                      {note.content.length > 100 ? '...' : ''}
                    </p>
                    <span className="panel-text-sm text-gray-400">
                      {note.timestamp.toLocaleDateString()}
                    </span>
                  </div>
                ))}
                {(!notes[category] || notes[category].length === 0) && (
                  <div className="text-center panel-text-sm text-gray-500 py-2">
                    No notes in this category
                  </div>
                )}
              </div>
            </PanelAccordion>
          ))}
        </>
      ) : (
        <div className="space-y-3 p-2">
          <div className="flex justify-between items-center">
            <h3 className="panel-text font-semibold">New Note</h3>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentNote(null);
              }}
              className="text-gray-500 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <select
            value={currentNote?.category}
            onChange={(e) => setCurrentNote(prev => prev ? {...prev, category: e.target.value} : null)}
            className="w-full p-2 border rounded-lg panel-text border-3d-inset"
          >
            {noteCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Title"
            value={currentNote?.title || ''}
            onChange={(e) => setCurrentNote(prev => prev ? {...prev, title: e.target.value} : null)}
            className="w-full p-2 border rounded-lg panel-text border-3d-inset"
          />

          <textarea
            placeholder="Content"
            value={currentNote?.content || ''}
            onChange={(e) => setCurrentNote(prev => prev ? {...prev, content: e.target.value} : null)}
            className="w-full p-2 border rounded-lg panel-text min-h-[150px] border-3d-inset"
          />

          <button
            onClick={handleSaveNote}
            className="w-full p-2 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg btn-animate border-3d"
          >
            <Save className="h-4 w-4" />
            <span className="panel-text">Save Note</span>
          </button>
        </div>
      )}
    </div>
  );
}
